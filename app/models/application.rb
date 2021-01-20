class Application < ApplicationRecord
  belongs_to :company
  has_many :interviews
  has_many :questions
  has_one :process

  validates :title, presence: true
  validates :description, presence: true
end
