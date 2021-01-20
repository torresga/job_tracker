class CreateInterviews < ActiveRecord::Migration[6.0]
  def change
    create_table :interviews do |t|
      t.string :type
      t.text :comments

      t.timestamps
    end
  end
end
