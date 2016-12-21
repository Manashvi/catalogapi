var search_data = {"index":{"searchIndex":["whapps","catalogapi","cart_add_item()","cart_empty()","cart_has_item_errors?()","cart_is_locked?()","cart_is_valid?()","cart_needs_address?()","cart_order_place()","cart_remove_item()","cart_set_address()","cart_set_item_quantity()","cart_unlock()","cart_validate()","cart_view()","catalog_breakdown()","list_available_catalogs()","new()","order_list()","order_track()","redemption_active?()","search_catalog()","view_item()"],"longSearchIndex":["whapps","whapps::catalogapi","whapps::catalogapi#cart_add_item()","whapps::catalogapi#cart_empty()","whapps::catalogapi#cart_has_item_errors?()","whapps::catalogapi#cart_is_locked?()","whapps::catalogapi#cart_is_valid?()","whapps::catalogapi#cart_needs_address?()","whapps::catalogapi#cart_order_place()","whapps::catalogapi#cart_remove_item()","whapps::catalogapi#cart_set_address()","whapps::catalogapi#cart_set_item_quantity()","whapps::catalogapi#cart_unlock()","whapps::catalogapi#cart_validate()","whapps::catalogapi#cart_view()","whapps::catalogapi#catalog_breakdown()","whapps::catalogapi#list_available_catalogs()","whapps::catalogapi::new()","whapps::catalogapi#order_list()","whapps::catalogapi#order_track()","whapps::catalogapi#redemption_active?()","whapps::catalogapi#search_catalog()","whapps::catalogapi#view_item()"],"info":[["Whapps","","Whapps.html","","<p>Placeolder\n"],["Whapps::CatalogAPI","","Whapps/CatalogAPI.html","","<p>Whapps::CatalogAPI - Interface to the catalogapi.com API For more\ninformaiton on the catalogapi.com service, …\n"],["cart_add_item","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_add_item","(socket:, catalog_item_id:, user:, option_id: nil, quantity: 1)","<p>Add an item to the user&#39;s cart.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket ID\n"],["cart_empty","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_empty","(socket:, user:)","<p>Empty the user&#39;s cart.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket ID\n"],["cart_has_item_errors?","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_has_item_errors-3F","(socket:, user:)","<p>Returns true if the cart contains items that have pricing or availability\nchanges.\n<p>Required arguments …\n"],["cart_is_locked?","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_is_locked-3F","(socket:, user:)","<p>Returns true if the cart is currently locked.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket ID\n"],["cart_is_valid?","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_is_valid-3F","(socket:, user:)","<p>Returns true if the cart is valid and has no errors.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket ID\n"],["cart_needs_address?","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_needs_address-3F","(socket:, user:)","<p>Returns true if the cart does not have an address information set.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The …\n"],["cart_order_place","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_order_place","(socket:, user:, cart_version: nil)","<p>Convert the current user cart into an order.  If you pass the cart version\nnumber the API will make sure …\n"],["cart_remove_item","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_remove_item","(socket:, catalog_item_id:, user:, option_id: nil)","<p>Remove an item from the user&#39;s cart.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket ID\n"],["cart_set_address","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_set_address","(socket:, user:, first_name:, last_name:, address_1:, address_2: nil, address_3: nil, city:, state_province:, postal_code:, country:, email:, phone_number: nil)","<p>Set the address that you wish the items to be shipped to, along with the\nuser&#39;s name and contact …\n"],["cart_set_item_quantity","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_set_item_quantity","(socket:, catalog_item_id:, quantity:, user:, option_id: nil)","<p>Set the quantity of an item already in the cart\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket ID\n"],["cart_unlock","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_unlock","(socket:, user:)","<p>Unlocks the cart so it can be edited again.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket ID\n"],["cart_validate","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_validate","(socket:, user:, locked: 1)","<p>Validate that the cart can be placed and has no errors like missing items.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> …\n"],["cart_view","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-cart_view","(socket:, user:)","<p>Fetch the user&#39;s current cart contents.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket ID\n"],["catalog_breakdown","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-catalog_breakdown","(socket:)","<p>Get the tree of catalog categories for the selected socket\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket …\n"],["list_available_catalogs","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-list_available_catalogs","()","<p>List the sockets made available for the selected account.\n"],["new","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-c-new","(endpoint:, secret_key:)",""],["order_list","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-order_list","(user:, per_page: 10, page: 1)","<p>List all orders the user specified has placed.\n<p>Required arguments\n<p><p>user &mdash; <strong>String</strong> The ID of the user making …\n"],["order_track","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-order_track","(order_number:)","<p>Get the order item and tracking information.\n<p>Required arguments\n<p><p>order_number &mdash; <strong>String</strong> The order number you …\n"],["redemption_active?","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-redemption_active-3F","()","<p>Returns true if the selected account has redemption activated.\n"],["search_catalog","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-search_catalog","(socket:, search: nil, category_id: nil, min_points: nil, max_points: nil, per_page: 10, page: 1, sort: 'rank asc')","<p>Search the catalog on the selected socket.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket ID\n"],["view_item","Whapps::CatalogAPI","Whapps/CatalogAPI.html#method-i-view_item","(socket:, catalog_item_id:)","<p>View a specific item by ID.\n<p>Required arguments\n<p><p>socket &mdash; <strong>Integer</strong> The socket ID\n"]]}}