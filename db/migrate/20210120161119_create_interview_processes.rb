class CreateInterviewProcesses < ActiveRecord::Migration[6.0]
  def change
    create_table :interview_processes do |t|
      t.boolean :phone_screen
      t.boolean :take_home
      t.boolean :interview
      t.boolean :final_offer

      t.timestamps
    end
  end
end
