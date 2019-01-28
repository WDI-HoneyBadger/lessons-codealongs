class CupsController < ApplicationController
  def index
    @cups = Cup.all
  end

  def show
    @cup = Cup.find(params[:id])
  end

  def new
    @cup = Cup.new
  end

  def create
    cup_params = params.require(:cup).permit(:color, :capacity, :material)
    @cup = Cup.create(cup_params)
    redirect_to @cup
  end

  def edit
    @cup = Cup.find(params[:id])
  end

  def update
    cup_params = params.require(:cup).permit(:color, :capacity, :material)
    @cup = Cup.find(params[:id])
    @cup.update(cup_params)
    redirect_to @cup
  end

  def destroy
    Cup.find(params[:id]).destroy
    redirect_to cups_path
  end
end
