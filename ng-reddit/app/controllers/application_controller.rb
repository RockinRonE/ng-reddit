class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :json


	def angular
		render 'layouts/application'
	end

  private

  def configure_permitted_parameters
  	devise_parameters_santizer.for(:sign_up) << :username
  end
end
