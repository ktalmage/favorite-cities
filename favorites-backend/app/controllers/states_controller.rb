class StatesController < ApplicationController
    def index
        states = State.all
        render json: StateSerializer.new(states)
    end
end
