class User
  attr_accessor :first_name, :last_name
  @@all = []

  def initialize(first_name, last_name, password)
    @first_name = first_name
    @last_name = last_name
    @password = encrypt(password)
    @@all << self.first_name
  end

  def self.all_users
    @@all
  end
  
  def greet
    puts "Hi! My name is #{@first_name} #{@last_name}!"
  end

  private
  def encrypt(input)
    input.reverse
  end
end

frodo = User.new("frodo", "baggins", "iluvrings400")
sam = User.new("Samwise", "Gamgee", "frodoiscray")
legolas = User.new("Legolas", "Greenleaf", "treercool")

frodo.encrypt('wordsandstuff')
# p frodo
# p sam

