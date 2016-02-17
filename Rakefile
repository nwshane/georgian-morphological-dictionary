require 'pry-byebug'
require 'open-uri'
require 'json'

# Retrieves fake words from google spreadsheet and stores in JSON
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
      word_hash = {}

      column_types.each_with_index do |column_type, index|
        word_hash[column_type] = word_row[index]
      end

      word_hashes.push word_hash
    end

    word_hashes
  end
end

# Updates fake words file with spreadsheet words
class FakeWords
  def initialize(word_sheets)
    @word_sheets = word_sheets
  end

  attr_reader :word_sheets

  def update
    update_file_with_words(all_words)
  end

  private

  def update_file_with_words(all_words)
    demo_words_module = "let words = #{all_words.to_json};\n\nexport { words };"

    File.write('modules/fake_words_api/demo_words.js', demo_words_module)
  end

  def all_words
    words = []

    word_sheets.each do |word_sheet|
      words += word_sheet.words
    end

    words
  end
end

desc 'Update local words JSON with google spreadsheet words'
task :update_words do
  verbs = WordSheet.new('1V1G-oGezEOlCxhmva1rGZi398Z_GPGj5iL7ZsUezeUc')
  FakeWords.new([verbs]).update
end
