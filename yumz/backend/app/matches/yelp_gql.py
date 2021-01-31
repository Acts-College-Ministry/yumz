from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport
import os
from dotenv import load_dotenv

load_dotenv()

def clientSetup():
	KEY = os.getenv("YELP_API_KEY")

	header = {"Authorization":"bearer {}".format(KEY),
				"Content-Type": "application/json"}

	transport = RequestsHTTPTransport(url="https://api.yelp.com/v3/graphql", headers=header, use_json=True)

	# Create a GraphQL client using the defined transport
	client = Client(transport=transport, fetch_schema_from_transport=True)

	return client

def initQuery(loc):
	client = clientSetup()
	# Provide a GraphQL query
	query = gql ("""{
		search (location: "%s", term: "food") {
			business{
				name
				id
				categories {
					title
					alias
				}
				is_closed
				phone
				rating
				photos
			}
		}
	}
	""" %(loc))

	# Execute the query on the transport
	resp = client.execute(query)
	return resp

def photos(result):
	businesses = result['search']['business']
	for b in businesses:
		print(b['photos'][0])

initQuery("SAn jose")

"""
#unused
import geocoder
from geopy.geocoders import Nominatim
import json
import requests

def locationSetup():
	LOC = os.getenv("HERE_KEY")

	header = {"Content-Type": "application/json"}

	api_url_base = "https://pos.ls.hereapi.com/positioning/v1/locate"
	api_url = api_url_base + ("?apiKey={%s}" (%LOC))
	
	resp = requests.get(api_url, headers=header)
	if resp.status_code == 200:
		print(json.loads(response.content.decode('utf-8')))
	else:
		print("issue with: ", api_url)
"""