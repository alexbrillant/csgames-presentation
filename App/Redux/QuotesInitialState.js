import { Colors } from '../Themes'
export default {
  searchTerm: '',
  authors: [
    {
      name: 'Albert Einstein',
      allQuotesRead: false,
      quoteIndex: 0,
      color: Colors.iceberg,
      quotes: [
        'Look deep into nature, and then you will understand everything better.',
        'The true sign of intelligence is not knowledge but imagination.',
        'It has become appallingly obvious that our technology has exceeded our humanity.'
      ]
    },
    {
      name: 'Friedrich Nietzsche',
      allQuotesRead: false,
      quoteIndex: 0,
      color: Colors.mint,
      quotes: [
        'The man of knowledge must be able not only to love his enemies but also to hate his friends.',
        'One must still have chaos in oneself to be able to give birth to a dancing star.',
        'The doer alone learneth.',
        'Those who cannot understand how to put their thoughts on ice should not enter into the heat of debate.'
      ]
    },
    {
      name: 'Elon Musk',
      allQuotesRead: false,
      quoteIndex: 0,
      color: Colors.goldenRod,
      quotes: [
        'Life is too short for long-term grudges.',
        'When something is important enough, you do it even if the odds are not in your favor.',
        'If you\'re trying to create a company, it\'s like baking a cake. You have to have all the ingredients in the right proportion.',
        'I think life on Earth must be about more than just solving problems... It\'s got to be something inspiring, even if it is vicarious.'
      ]
    }
  ]
}
