class CitiesController < ApplicationController
    def index
        cities = City.all
        render json: CitySerializer.new(cities)
    end

    def show
        city = City.find_by(id: params[:id])
        render json: CitySerializer.new(city)
    end

    def create
        city = State.cities.new(city_params)
        
    end

    private

    def city_params
        params.require(:city).permit(:name,:zipcode,:title,:description)
    end
end
