class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :region
      t.string :country
      t.string :birthday

      t.timestamps
    end
  end
end
