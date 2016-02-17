require 'pry-byebug'
require 'open-uri'
require 'json'

# Retrieves fake words from google spreadsheet and stores in JSON
class FakeWords

  def initialize
    @spreadsheet_id = '1V1G-oGezEOlCxhmva1rGZi398Z_GPGj5iL7ZsUezeUc'
    @url = 'https://docs.google.com/spreadsheets/d/1V1G-oGezEOlCxhmva1rGZi398Z_GPGj5iL7ZsUezeUc/pub?gid=0&single=true&output=csv'
  end

  attr_reader :spreadsheet_id, :url

  def update
    read_url = open(url).read.force_encoding('UTF-8')
    split_spreadsheet = read_url.split("\r\n").map { |word| word.split(',') }

    column_types = split_spreadsheet[0]
    word_rows = split_spreadsheet[1, split_spreadsheet.length - 1]

    array_of_word_hashes = reformat_csv_to_hashes(column_types, word_rows)

    demo_words_module = "let words = #{array_of_word_hashes.to_json};\n\nexport { words };"

    File.write('modules/fake_words_api/demo_words.js', demo_words_module)
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

desc 'Update local words JSON with google spreadsheet words'
task :update_words do
  FakeWords.new.update
end
