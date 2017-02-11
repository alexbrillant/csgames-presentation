// @flow

import React from 'react'
import { View, Text, ListView, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
// import { Actions as NavigationActions } from 'react-native-router-flux'
import { ListViewAuthorsSelector } from '../Redux/QuotesRedux'
import AlertMessage from '../Components/AlertMessage'
import styles from './Styles/ListViewAuthorsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'

class ListViewAuthors extends React.Component {

  state: {
    dataSource: Object
  }

  constructor (props) {
    super(props)
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})
    this.state = {
      dataSource: ds.cloneWithRows(this.props.authors)
    }
    this.renderRow = this.renderRow.bind(this)
    this.handleOnPressRow = this.handleOnPressRow.bind(this)
  }

  handleOnPressRow (author: string) {
    NavigationActions.quote({
      authorName: author
    })
  }

  renderRow (author) {
    return (
      <TouchableWithoutFeedback onPress={() => this.handleOnPressRow(author.name)}>
        <View style={[styles.row, {backgroundColor: author.color}]}>
          <Text style={styles.boldLabel}>{author.name}</Text>
          <Text style={styles.label}>{author.quoteCount} quotes</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  componentWillReceiveProps (newProps) {
    if (newProps.authors) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newProps.authors)
      })
    }
  }

  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Nothing to See Here, Move Along' show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
          pageSize={15}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authors: ListViewAuthorsSelector(state.quotes)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListViewAuthors)
