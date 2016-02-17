# Updates fake words file with spreadsheet words
class FakeWordsUpdater
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
