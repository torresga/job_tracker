class CreateApplications < ActiveRecord::Migration[6.0]
  def change
    create_table :applications do |t|
      t.string :title
      t.string :description
      t.text :cover_letter
      t.text :resume
      t.datetime :date_applied

      t.timestamps
    end
  end
end
