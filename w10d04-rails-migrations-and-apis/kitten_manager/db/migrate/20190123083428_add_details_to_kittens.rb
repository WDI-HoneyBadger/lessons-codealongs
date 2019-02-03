class AddDetailsToKittens < ActiveRecord::Migration[5.2]
  def change
    add_column :kittens, :color, :string
    add_column :kittens, :height, :float
  end
end
