class PersonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :address, :city, :region, :country, :birthday
end
