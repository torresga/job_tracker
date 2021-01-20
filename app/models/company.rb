class Company < ApplicationRecord
  has_many :employees, dependent: :destroy
  has_many :applications, dependent: :destroy

  validates :name, presence: true
  validates :company_type, presence: true
  validates :industry, presence: true
end
