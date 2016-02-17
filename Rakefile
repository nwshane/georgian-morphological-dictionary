require 'pry-byebug'
require 'open-uri'
require 'json'

require_relative 'fake_words_updater/fake_words_updater'
require_relative 'fake_words_updater/word_sheet'
require_relative 'fake_words_updater/fake_word_factory'

desc 'Update local words JSON with google spreadsheet words'
task :update_words do
  verbs = WordSheet.new('1V1G-oGezEOlCxhmva1rGZi398Z_GPGj5iL7ZsUezeUc')
  FakeWordsUpdater.new([verbs]).update
end
