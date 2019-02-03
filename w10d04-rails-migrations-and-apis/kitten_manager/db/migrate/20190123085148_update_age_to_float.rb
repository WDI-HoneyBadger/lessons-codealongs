class UpdateAgeToFloat < ActiveRecord::Migration[5.2]
  def change
    change_column :kittens, :age, :float
  end
end
