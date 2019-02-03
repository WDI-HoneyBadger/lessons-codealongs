class AddFluffinessToKittens < ActiveRecord::Migration[5.2]
  def change
    add_column :kittens, :fluffiness, :float
  end
end
