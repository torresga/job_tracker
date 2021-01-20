class CreateInterviewProcesses < ActiveRecord::Migration[6.0]
  def change
    create_table :interview_processes do |t|
      t.bool :phone_screen
      t.bool :take_home
      t.bool :interview
      t.bool :final_offer

      t.timestamps
    end
  end
end
