class AddCompanyIdReferenceOnEmployee < ActiveRecord::Migration[6.0]
  def change
    add_reference :employees, :company, foreign_key: true
  end
end
