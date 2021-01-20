class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :type
      t.string :industry
      t.string :product
      t.text :comments

      t.timestamps
    end
  end
end
