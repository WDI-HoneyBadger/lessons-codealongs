class RemoveOwnerFromKittens < ActiveRecord::Migration[5.2]
  def change
    remove_column :kittens, :owner, :string
  end
end
