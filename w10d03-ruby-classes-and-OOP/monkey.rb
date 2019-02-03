class Monkey
  # attr_reader :name, :species, :foods_eaten
  def initialize(name, species)
    @name = name
    @species = species
    @foods_eaten = []
  end

  def eat(food)
    # @foods_eaten.push(food)
    @foods_eaten << food
  end

  def introduce
    "Hi, I'm #{@name}, I'm a happy lil #{@species}, and I've eaten #{@foods_eaten}"
  end
end

donkey_kong = Monkey.new('donkey kong', 'monkey')
p donkey_kong

donkey_kong.eat('sushi')
donkey_kong.eat('hard taco')
puts donkey_kong
p donkey_kong
puts donkey_kong.inspect