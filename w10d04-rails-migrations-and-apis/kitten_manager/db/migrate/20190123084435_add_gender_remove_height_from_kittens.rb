class AddGenderRemoveHeightFromKittens < ActiveRecord::Migration[5.2]
  def change
    add_column :kittens, :gender, :string
    remove_column :kittens, :height, :float
  end
end
