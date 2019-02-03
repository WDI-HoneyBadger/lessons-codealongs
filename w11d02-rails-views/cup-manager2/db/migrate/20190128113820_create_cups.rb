class CreateCups < ActiveRecord::Migration[5.2]
  def change
    create_table :cups do |t|
      t.string :color
      t.float :capacity
      t.string :material

      t.timestamps
    end
  end
end
