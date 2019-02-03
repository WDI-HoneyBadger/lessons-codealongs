class CreateKittens < ActiveRecord::Migration[5.2]
  def change
    create_table :kittens do |t|
      t.string :name
      t.integer :age
      t.string :owner

      t.timestamps
    end
  end
end
