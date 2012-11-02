---
layout: page
title: "Index"
description: ""
---
{% include JB/setup %}

#Setting Up Shipping#

Shipping can be a complicated matter. We’ve attempted to simplify the shipping process by enabling you to create shipping zones and profiles that you can easily apply to any product in your inventory. Let’s start off by explaining the difference between a zone and a profile. 

###Profiles###
A Profile is a predefined shipping price typically used for items with approximately the same shipping cost. For example, you may want to define a different shipping profile for heavy items and light items. 

###Zones###
A Zone is a geographical area defined as a specific country or region such as North America. You define the shipping price for each zone. This is the price you want to charge to ship a product from your location to any address within that zone. For example, if you set the shipping price as $10.00 for the European zone and you are located in North Carolina and shipping a product to Spain, then $10.00 in shipping fees will be charged to the customer. 

We’ve predefined four zones for you: North America, the European Union, Europe - Non European Union, and Rest of World. While we’ve set up the geographical areas for these zones you still need to define the shipping price for each zone before shipping charges for these zones in order for them to be applied in your shopping cart.

###How Profiles and Zones Intersect###
When you create a new profile, you must also define the zones you would like to associate with that profile. For example, if you want to create a **Heavy Item** profile and a **Light Item** profile and are planning to ship products only within North America then you would need to create a North America zone under both the Heavy Item and the Light Item profiles. 

###Pricing for First Item and Additional Items###
Within each profile and zone, you can define a different price for the first item and each additional item that the customer purchases. For example, if you wanted to give a discount on shipping when a customer purchases two or more heavy items to be shipped in North America then within the Heavy Item profile in the North America zone you might define the shipping price for the first item as $10 and the shipping price for each additional item as $5. If the customer added two heavy items to their cart, then their shipping charges would be $15. If the customer added three heavy items to their cart, then their shipping charges would be $20. 

When multiple items are in the customer’s shopping cart and one item utilizes a more expensive shipping profile and the second item utilizes a less expensive shipping profile, the shipping profile with the highest price applies to the first item and the shipping profile with the least expensive price applies to the second item.

###Creating and Editing Profiles###
To create a new profile, log into your SpreeWorks account. Click on **Manage** and then scroll over **Configuration**. In the Configuration drop down menu, select **Shipping**.


**Figure A:**

![Figure A](/assets/spreeworks/images/set_up_shipping_figure_a.jpg)


You will see that we’ve set up a default shipping profile and zone to get you started. You can edit the shipping pricing for this existing profile or you can choose to create a new profile. 


**Figure B:**

![Figure B](/assets/spreeworks/images/set_up_shipping_figure_b.jpg)


To edit the default shipping profile, select the checkbox for the zone you would like to make active. In this example, we are going to make the North America zone active. When you select the zone, you will see that the pricing values will change from **n/a** to **0.0**. To change the price from zero, left click on **0.0**. An editable field will appear allowing you to change the price. Once you’ve entered the desired price, click **Save**. Take this same action to define the price for additional items. If you don’t want to charge a different price for additional items, then enter the same price in the **First Item** and the **Additional Item** field. Also, follow these same steps to activate the pricing for the other predefined zones in the **Default** profile. 


**Figure C:**

![Figure C](/assets/spreeworks/images/set_up_shipping_figure_c.jpg)


To create a new profile, click the **New Profile** button and enter a name for the profile in the field that appears. Click **Save**once complete. In this example, I have created a new profile called **Heavy Items**.

**Figure D:**

![Figure D](/assets/spreeworks/images/set_up_shipping_figure_d.jpg)

Your new profile is created and includes the default zones. Take the same steps as in Figure C above to edit the shipping price for each of the zones.

**Figure E:**

![Figure E](/assets/spreeworks/images/set_up_shipping_figure_e.jpg)

###Creating and Editing Zones###
As stated earlier, we’ve created four predefined zones for you: North America, the European Union, Europe - Non European Union, and Rest of World. You can add or delete countries from these predefined zones. To add a country, go to the zone that you would like to edit, find the country you would like to add in the drop down menu, and click the **Add Country** button. The country will appear in the zone country list once complete.  

**Figure F:**

![Figure F](/assets/spreeworks/images/set_up_shipping_figure_f.jpg)

To delete a country from a zone, click the delete icon next to the country name. 

**Figure G:**

Note: Need to add image once the bug is fixed to add a delete button

To create a new zone, click the **New Zone** button at the bottom of the page. Enter a name for the zone in the field that appears and click **Save**. 

**Figure H:**

![Figure H](/assets/spreeworks/images/set_up_shipping_figure_h.jpg)

To add a country to the new zone, follow the same steps from above in Figure F.