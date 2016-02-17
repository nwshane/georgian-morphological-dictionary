# Converts google spreadsheet words to array of words
class WordSheet
  def initialize(id)
    @id = id
    @url = "https://docs.google.com/spreadsheets/d/#{id}/pub?gid=0&single=true&output=csv"
  end

  attr_reader :id, :url

  def words
    read_url = open(url).read.force_encoding('UTF-8')
    split_spreadsheet = read_url.split("\r\n").map { |word| word.split(',') }

    column_types = split_spreadsheet[0]
    word_rows = split_spreadsheet[1, split_spreadsheet.length - 1]

    reformat_csv_to_hashes(column_types, word_rows)
  end

  private

  def reformat_csv_to_hashes(column_types, word_rows)
    word_hashes = []

    word_rows.each do |word_row|
      word_hashes.push FakeWordFactory.create_word(word_row, column_types)
    end

    word_hashes
  end
end
