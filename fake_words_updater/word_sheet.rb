# Converts google spreadsheet words to array of words
# How to find the url of a google spreadsheet:
# 1. Go to File -> Publish to the Web
# 2. Where Entire Document is the default, select the desired sheet
# 3. Where Web Page is the default, select Comma-separated values
# 4. Copy the link

class WordSheet
  def initialize(url)
    @url = url
  end

  attr_reader :url

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
