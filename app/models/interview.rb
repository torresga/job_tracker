class Interview < ApplicationRecord
  belongs_to :application
  has_many :questions

  validates :type, presence: true
end
