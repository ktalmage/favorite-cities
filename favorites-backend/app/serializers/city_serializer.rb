class CitySerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :zipcode, :title, :description
  belongs_to :state
end
