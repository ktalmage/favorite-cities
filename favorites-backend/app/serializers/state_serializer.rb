class StateSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :code
  has_many :cities
end
