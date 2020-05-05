class Person < ApplicationRecord
#validations to make sure that we add a valid person with valid information
    validates :name, presence: true
    validates :address, presence: true
    validates :city, presence: true
    validates :region, presence: true
    validates :country, presence: true
    validates :birthday, presence: true
end
