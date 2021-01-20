class Question < ApplicationRecord
  has_one :answer

  validates :body, presence: true
end
