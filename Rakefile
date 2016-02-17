require 'pry-byebug'
require 'open-uri'
require 'json'

require_relative 'fake_words_updater/fake_words_updater'
require_relative 'fake_words_updater/word_sheet'
require_relative 'fake_words_updater/fake_word_factory'

desc 'Update local words JSON with google spreadsheet words'
task :update_words do
  verbs = WordSheet.new('https://docs.google.com/spreadsheets/d/1V1G-oGezEOlCxhmva1rGZi398Z_GPGj5iL7ZsUezeUc/pub?gid=0&single=true&output=csv')
  nouns_adjectives = WordSheet.new('https://docs.google.com/spreadsheets/d/1V1G-oGezEOlCxhmva1rGZi398Z_GPGj5iL7ZsUezeUc/pub?gid=21556859&single=true&output=csv')
  everything_else = WordSheet.new('https://docs.google.com/spreadsheets/d/1V1G-oGezEOlCxhmva1rGZi398Z_GPGj5iL7ZsUezeUc/pub?gid=1992577022&single=true&output=csv')

  FakeWordsUpdater.new([verbs, nouns_adjectives, everything_else]).update
end
