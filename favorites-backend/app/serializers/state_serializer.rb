class StateSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :code, :cities
  has_many :cities
end
