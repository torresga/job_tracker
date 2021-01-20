class Company < ApplicationRecord
  has_many :employees, depend: :destroy
  has_many :applications, depend: :destroy

  validates :name, presence: true
  validates :type, presence: true
  validates :industry, presence: true
end
