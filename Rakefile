require 'pry-byebug'
require 'open-uri'
require 'json'

desc 'Update local words JSON with google spreadsheet words'
task :update_words do
  spreadsheet_id = '1V1G-oGezEOlCxhmva1rGZi398Z_GPGj5iL7ZsUezeUc'
  url = "https://spreadsheets.google.com/feeds/list/" + spreadsheet_id + "/od6/public/values?alt=json"

  response = JSON.parse(open(url).read)
  words = response['feed']['entry']

  unwanted_keys = ['id', 'updated', 'category', 'title', 'content', 'link']
  new_words = []
  words.each do |word|
    unwanted_keys.each do |unwanted_key|
      word.delete(unwanted_key)
    end

    new_word = {}

    word.keys.each do |word_key|
      value = word[word_key]['$t']

      unless value == ''
        new_word_key = word_key.gsub('gsx$', '')
        new_word[new_word_key] = value
      end
    end

    new_words.push(new_word)
  end

  demo_words_module = "let words = #{new_words.to_json};\n\nexport { words };"

  File.write('modules/fake_words_api/demo_words.js', demo_words_module)
end
