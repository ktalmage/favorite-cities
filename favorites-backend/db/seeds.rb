# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


state_list = [
    ["ALABAMA", "AL"],
    ["ALASKA","AK"],
    ['ARIZONA','AZ'],
    ['ARKANSAS','AR'],
    ["CALIFORNIA","CA"],
    ["COLORADO","CO"],
    ["CONNECTICUT","CT"],
    ["DELAWARE","DE"],
    ["FLORIDA","FL"],
    ["GEORGIA", "GA"],
    ["HAWAII", "HI"],
    ["IDAHO","ID"],
    ["ILLINOIS","IL"],
    ["INDIANA",	"IN"],
    ["IOWA","IA"],
    ["KANSAS","KS"],
    ["KENTUCKY","KY"],
    ["LOUISIANA","LA"],
    ["MAINE","ME"],
    ["MARYLAND","MD"],
    ["MASSACHUSETTS","MA"],
    ["MICHIGAN","MI"],
    ["MINNESOTA","MN"],
    ["MISSISSIPPI","MS"],
    ["MISSOURI","MO"],
    ["MONTANA",	"MT"],
    ["NEBRASKA","NE"],
    ["NEVADA","NV"],
    ["NEW HAMPSHIRE","NH"],
    ["NEW JERSEY","NJ"],
    ["NEW MEXICO","NM"],
    ["NEW YORK","NY"],
    ["NORTH CAROLINA","NC"],
    ["NORTH DAKOTA","ND"],
    ["OHIO","OH"],
    ["OKLAHOMA","OK"],
    ["OREGON","OR"],
    ["PENNSYLVANIA","PA"],
    ["RHODE ISLAND","RI"],
    ["SOUTH CAROLINA","SC"],
    ["SOUTH DAKOTA","SD"],
    ["TENNESSEE","TN"],
    ["TEXAS","TX"],
    ["UTAH","UT"],
    ["VERMONT","VT"],
    ["VIRGINIA","VA"],
    ["WASHINGTON","WA"],
    ["WEST VIRGINIA","WV"],
    ["WISCONSIN","WI"],
    ["WYOMING","WY"]
]

state_list.each do |name, code|
    State.create( name: name, code: code )
  end