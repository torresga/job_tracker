class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    change_table :companies do |t|
      t.rename :type, :company_type
    end
  end
end
