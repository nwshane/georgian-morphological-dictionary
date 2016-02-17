# Converts array of types and array of values to hash
module FakeWordFactory
  def self.create_word(word_array, column_types)
    word_hash = {}

    column_types.each_with_index do |column_type, index|
      word_hash[column_type] = word_array[index]
    end

    word_hash
  end
end
