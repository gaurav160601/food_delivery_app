const fs = require('fs');
const path = require('path');
const { CATALOGS, RESTAURANT_MENUS } = require('./menuCatalogs');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DETAILS_DIR = path.join(DATA_DIR, 'restaurant-details');
const RESTAURANTS_FILE = path.join(DATA_DIR, 'restaurants.json');

const REAL_ITEM_IMAGES = [
  "FOOD_CATALOG/IMAGES/CMS/2026/5/6/6737be0e-58d1-463f-b9db-30e8be3fe7c8_f6b3722b-f2e7-4f22-9a35-943033061c15.png_compressed",
  "FOOD_CATALOG/IMAGES/CMS/2026/5/6/8673e5e2-47dd-48a6-80cc-a879bb9568b9_4593e3fe-2b96-4235-b39b-391b5cc344f2.png",
  "FOOD_CATALOG/IMAGES/CMS/2026/5/6/f8c02ff5-1d31-4b67-984b-b257f9014c94_0f2acdc8-3b49-4c22-baca-17214346b1fe.png_compressed",
  "FOOD_CATALOG/IMAGES/CMS/2025/11/19/2ec43a5c-4948-41bd-96ab-dda126264f36_c0ba9607-fa0f-47dc-b320-6451f1efaf76.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/11/19/e1eac873-9f3a-4ce5-a576-068b25bef6bb_26ef2c57-df5f-456b-abb8-a227a9c1877c.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/11/15/bad96266-8663-42c6-8842-2b01b1cc8677_7ca6d3fe-268d-48fb-a4b6-9baea13976c2.png_compressed",
  "FOOD_CATALOG/IMAGES/CMS/2025/11/15/d9a1b266-83aa-4f41-95a0-cfe5d2828194_f6859877-5cb6-459d-ac12-8b0737bef414.png_compressed",
  "FOOD_CATALOG/IMAGES/CMS/2025/11/19/9838cda0-0156-4c3d-bd43-c7d3633e581e_6fa307d9-c759-476a-97a8-753b086360f4.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/11/15/40315a21-9fe3-4990-ae92-94698477680f_90d077e0-eab5-4ade-a101-85c4717dd967.jpg_compressed",
  "FOOD_CATALOG/IMAGES/CMS/2025/11/15/98216506-1d88-4276-ac06-92056f875cc6_7a8ca218-713d-488a-8d1d-3e1eb85cbf1e.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/11/19/2635e6b9-7e32-494a-897b-2eb34e5a392f_8108a509-090c-476b-9137-4bdb320dc6a1.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/11/19/2845404a-5e9a-460e-a2f3-cbb104ce3bcf_140a6922-6447-4ba8-a074-60e310493e28.jpg",
  "gilsg4u3pv23avswifdf",
  "whgvtme1hhq9uxtpgjsg",
  "uld1cbbr0onwym3wtyda",
  "jrznl7rbannkr9obnafu",
  "kdlhbpzgpaoy7zqhvv5y",
  "zdhvp16taomwukt5tj8r",
  "FOOD_CATALOG/IMAGES/CMS/2025/11/24/e0a207f1-4cae-493e-b92a-f705188d75bb_837c5b4f-ab27-4d1f-ad37-d43eb2924a14.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/12/3/3845f6e4-98a3-4792-bcbc-616a7fa111fe_7bca7afd-c61a-4589-86a0-e7eb60225189.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/12/4/b45f21a4-1319-428f-84cb-1f1f4941b099_e6875ebf-cb08-468f-94fc-9f73ca699cef.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/10/31/6244b222-1609-4ff9-b58e-8134c1b0fe2f_a43b0897-e4d9-4bf0-92a3-f68f67d7670f.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/10/31/f168ce92-f0d5-49fe-8c28-187adb8c3ae6_0e1b088f-6174-4ee6-b52a-935c096b4536.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/10/31/cf505606-f67c-4405-b690-a00c64c7490d_f7f3afcc-2899-4b7b-81c8-1d1ca495a992.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/10/31/0f9cdf8e-f562-45ee-ab41-0afbbad1aecc_f98cd208-5df2-4397-8f45-db495b909590.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2025/10/31/fc381286-37b2-4c85-a9e8-c9e9415ddb41_17981d47-75d6-43cf-a1a8-c5c71a22ff7d.jpg",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/27/cff2d743-9983-45d2-a7ea-f90dfed15448_e1f7eab0-9a2e-4942-a123-fb434439e528.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/23/1e386955-1f7f-40f5-bd18-9fb1d3ff22d1_8236c93d-d216-47cc-9288-d0017f93bec5.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/19/88dc6678-8fc6-4ac7-ae37-1900343cb5d7_d22f21c6-ff5f-437b-877e-70d1f34b3bbb.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/17/30395422-975d-4a0e-b3b2-3a98196bf57e_d3d79c3a-1f9b-4775-9e7b-f2e95a0da25b.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/22/c3569a8a-f2b8-42c5-a276-f1ca8f8d7bd3_fc877800-16ee-40bf-ab44-72740386e67c.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/18/a6707782-db0a-4604-98f4-29def0c2e82a_bbe2eb1c-e734-48ea-bf4a-aa37723a1f3b.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/18/36913ff8-26bc-40c5-8497-fe1933f5a221_5a3c8a8a-a127-4a21-a45d-5bce5439be69.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/30/dc34e921-5fe7-47ae-bc83-c6452bc7030f_3b83ecf9-e5a1-4fd2-9f0b-50724a746e3f.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/13/d462bb4e-1746-4c2e-b9a5-82fb9f4d460a_0aef6567-d9df-4cdf-9ec9-86bb5cec345f.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/26/643688ab-c80e-441d-b90f-0a5ee83b7922_e6d800b2-a964-4584-9268-fc5788122c89.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/27/81caba99-f178-41e1-bc66-6532155fabd8_7fe9d68b-4733-453c-82e5-dfa41a3b6e27.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/17/8b93d718-240e-4144-8ea7-f2c4a9ecbd8b_d94bdb22-9e91-4115-9a57-004d7c9a1bdc.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/3/18/a2866691-18d4-485c-ab3f-f34cf2ec64da_9bfa584c-0dd6-489f-bac0-8a66f2e7bc85.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/17/d36d7bd1-6f74-4d4f-b1ac-8fe932a15837_b76c7f72-6a3a-4148-aea8-c7cdad810166.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/29/5fd69995-3e08-471e-aae9-87fc77d4d332_fb450ee0-75b1-4ca7-a915-0ac51b36b3ba.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/6/d3ec0df4-88c7-4776-b206-a42daede10ad_ae0d7b77-3ccf-4d51-a011-0ebdf10b549f.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/22/5f687883-3cfb-47a8-bd30-5c7dea928928_3f63ccd2-bf2d-4222-b447-67648d69cd7e.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/14/e00bb19a-3e51-43bc-ab15-8695cc956fd9_6b6a3414-a271-49e0-95bd-203292e744c7.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/30/c2b0d494-dde9-42af-98f5-bff77ac07f41_9555a968-4619-4061-8774-35c031941e0e.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/6/58ce768a-d76c-4d5a-ad25-0283587f5575_42a3cf31-e07d-4d1f-ae80-e78a2d40b6e4.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/7/27660ac6-ee85-4b64-883f-9d35de3b3adf_0817da12-33a7-42bf-9459-7ab55ad3b28d.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/6/04a3d65b-da99-4c62-8021-5abac1d214bb_2d0f6c2a-138e-4aa4-988a-9024bfe829e5.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/27/0dd02f5f-7261-4a8d-99b9-4192026db376_0cfda9ab-cd79-431a-9251-07c8776c33e6.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/6/90019851-82cf-4bc2-bc70-8f92da1d2175_4031dd0e-9269-46b5-b079-d8fc762f7f2d.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/6/f784c804-caf2-47c5-8eb4-1a79f18427fa_fd4ad43e-ba46-4209-8d69-a8677ec4d05d.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/27/64a2b749-1db3-4e15-b07e-28273cbf161d_34879d68-48f1-4f1b-a17c-47ed75dc49d3.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/14/4281e9c1-3dcf-45f1-bb7b-730c9535251e_d7ec5e7b-0196-4708-bef7-f3888562662d.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/13/d0743900-cebf-455a-9f29-7e018b188eba_d02ddd90-eb05-4520-a918-15b5b3c59d0d.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/7/475ca886-9812-4a49-8ab1-02ef561850f7_a4087bac-13a8-42d6-909d-a120beaaa890.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/22/5c6a41ca-d192-4aff-94e7-27ea0148215b_16078265-5516-4072-a89e-3cca6a52825e.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/21/d16c3595-f85c-4ae3-b8a2-1824a59f1038_41c5d242-7e1f-463f-b2e2-36ed917fd3fc.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/22/e6d998eb-bee3-4aa0-9b9b-158f35b21be9_d72b93cc-1565-4e30-84e1-9bb96823e1df.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/27/a13f77d8-7afe-4eab-9d7b-95b79df96184_f20ea310-d654-41a6-a103-d5ff8f83b88f.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/8/8571a862-93a5-4fdb-b0a2-59921e1b1ce4_cc68bdfd-595b-4624-aac9-6095a03e6762.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/18/74902bdd-b669-4a70-9f19-dabfc174c7fc_8d959cfb-dfe4-461d-a5f0-c148db6ea224.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/17/9f5767c7-3313-43fb-8139-fc25149a9a15_1baaaa9b-7d03-43c7-9701-269ef211d5ad.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/13/93e45392-e479-458e-babc-51080971db2f_329bba82-959e-45a5-93c7-62be627b4b30.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/22/e2a26c23-df70-42ba-97bf-56fc83d91a01_5cde842f-1192-4c25-91c5-95d56caceaff.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/19/105ad862-9809-45af-b848-28bb5c10e1b0_bcc02a39-1500-4c09-853d-e5e9e3f7f5aa.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/18/64525533-461b-4841-84f1-81c29263d7c6_d8b6f49b-933f-4d2f-8ade-16e838b0d373.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/14/ad3ca028-c9c8-4c2f-82fd-1e533d939dfb_0cf13249-1950-4313-b26b-0ea7be31a8f3.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/8/6c4d00ae-5ebe-4187-a3fe-49e8b2b27c29_5604d649-a942-4b46-94d7-cb8a7d36c2da.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/18/a0716afc-f227-4c91-87ea-9f625bcce7e1_3c703292-0f85-44d5-9481-f43f13366d80.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/29/4a63ee2a-4611-4b7f-b34f-4a4acb0b9226_930b6641-9972-48e9-814e-362ecc717c92.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/23/d28bf9b9-9cb6-431f-b92b-0b678891e715_18faf8cb-2aad-4823-b841-1157a33b3c23.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/7/de62fc01-c06d-4b05-8cad-fbb7fa29960c_d48355dd-dd0f-4d29-a233-7e9b53bbdc27.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/19/a5809bd5-995e-482d-8e28-7650baa4f014_fb54f6ae-f3cd-43da-a6ee-fddc27b46e7c.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/14/68e73944-e2bc-4606-9308-a2b838620a53_7ff235a3-0627-4f9a-92ac-fd77ad5f5315.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/7/e3a703c2-2f44-4b97-8d9f-e3c557ad6266_36403ce1-8e8b-4e31-a086-1ff78b1bf6cb.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/22/3641316b-b2dc-4312-a310-2e59b2e95de2_a539e887-ad53-4e0a-ba0d-31cfe64c724a.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/19/308df647-a34b-4eb1-a086-543bc2aeab84_cb21dc11-d16e-440d-b4bf-3edf64a8f596.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/19/9119d405-d1bc-46f4-a9c3-cfb47d8d44f1_2c1d4280-27f7-4e78-9411-c12e03c3d9b9.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/26/126d587c-5c63-41e7-963e-901d0bd9f26a_4338a9d8-0961-4857-8776-7217197162d9.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/18/e217edcc-d3e6-4eb2-a5eb-03053dab4884_0d4fc050-a866-49ca-8a8f-e456ae7079d0.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/30/db3796fc-8343-4e61-9461-850adb0a26c8_930cf3dc-9287-4423-9f4e-4970f4c99104.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/18/489bb58f-bef0-4ab9-9f62-8ef823050fd4_15045249-9550-41e4-9be2-f5feb37c152c.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/26/cda13ef8-91eb-4483-bc68-c9e7ad4ec78d_f8d2e035-412b-429b-ac02-bf1d8ccef6ce.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/27/8338f6b4-e10e-481a-ac54-1db2589c7c9f_03e56e7e-7d71-42b8-968d-4161c8de7178.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/17/7ec47e87-00e3-499c-80e6-cc93c5568da6_52b86a34-8301-4275-8746-8d7f5276add8.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/8/36e98aa6-f3e7-4558-be35-cac05fd8b30d_593a234a-0033-44ae-8d59-294b82b4b069.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/19/f81b0f35-98d6-40b4-b634-fdb76675044d_07534093-069e-4ccb-93ac-4416c247d453.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/21/c5d68456-5094-4be1-b2c7-216a09472146_482aa485-86aa-457b-a739-4d4b11da4a61.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/28/4d4671ba-3f1a-4ae6-9632-c227af09a508_d0bc8534-2644-41ab-a791-21e14f12e3ab.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/14/9ad1c07e-8831-4234-975a-6cdfa344beed_200b0d59-a398-4194-85ec-acc6e56e038c.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/23/48b1d12a-78eb-4a23-9de0-72b37721e8cf_016e4f08-c386-4bfe-a3be-7aa98fe178a4.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/2/8/ff33d9f3-6108-445e-afa8-34725c35a925_a03b5d19-2dd8-47c9-8093-29e20efb4e50.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/29/83b65514-f33e-4b42-b6d0-cd8c7a0d2600_57e936ad-fdc2-406f-b8a7-41bb8907695a.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/29/2f758af7-a14f-4e33-9e15-dcacfd20cfe3_a87c4c43-a9fa-42ff-b4cb-5e2c55f6a8f7.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/27/a4daa265-26ce-4771-ba30-5bfcdbbef7f9_867164cf-42fa-4c35-bde5-3cc025a080a8.JPG",
  "FOOD_CATALOG/IMAGES/CMS/2026/1/30/abf0cabf-fd6c-4f86-b770-5542e01deeab_42ed8dfa-da69-448f-b459-870d1d842986.JPG",
];

function resolveImage(slug) {
  if (!slug) return undefined;
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return REAL_ITEM_IMAGES[hash % REAL_ITEM_IMAGES.length];
}

function extractRestaurants(listJson) {
  const cards = listJson && listJson.data && listJson.data.cards;
  if (!Array.isArray(cards)) return [];
  const restaurants = [];
  for (const card of cards) {
    const grid = card.card && card.card.card && card.card.card.gridElements;
    const list = grid && grid.infoWithStyle && grid.infoWithStyle.restaurants;
    if (!Array.isArray(list)) continue;
    for (const entry of list) {
      if (entry && entry.info) {
        restaurants.push(entry.info);
      }
    }
  }
  const seen = new Map();
  restaurants.forEach((r) => {
    if (r && r.id && !seen.has(r.id)) seen.set(r.id, r);
  });
  return Array.from(seen.values());
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function buildRestaurantCard(restaurant) {
  const city = (restaurant.areaName || 'Bangalore').replace(/\s+/g, '_');
  const slug = slugify(restaurant.name);
  const address = `${restaurant.locality || restaurant.areaName || 'Main Road'}, ${restaurant.areaName || 'Bangalore'}, Bangalore, Karnataka 560001`;
  const cuisines = restaurant.cuisines || [];
  const discountHeader = restaurant.aggregatedDiscountInfoV3 && restaurant.aggregatedDiscountInfoV3.header
    ? restaurant.aggregatedDiscountInfoV3.header
    : '50% OFF';

  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Restaurant',
        info: {
          id: restaurant.id,
          name: restaurant.name,
          city: 'Bangalore',
          slugs: {
            restaurant: `${slug}-${city.toLowerCase()}`,
            city: 'bangalore',
          },
          uniqueId: 'e51e6528-4859-48c8-8fed-e84c17dc2d76',
          cloudinaryImageId: restaurant.cloudinaryImageId || 'f34657e4f398eec0e714971b58f8be69',
          locality: restaurant.locality || restaurant.areaName || 'MG Road',
          areaName: restaurant.areaName || 'Bangalore',
          costForTwo: restaurant.costForTwo || '30000',
          costForTwoMessage: restaurant.costForTwo ? `₹${Math.round(parseInt(restaurant.costForTwo) / 100)} for two` : '₹300 for two',
          cuisines,
          avgRating: restaurant.avgRating || 4.0,
          feeDetails: {
            restaurantId: restaurant.id,
            fees: [{}],
          },
          parentId: restaurant.parentId || restaurant.id,
          avgRatingString: restaurant.avgRatingString || String(restaurant.avgRating || '4.0'),
          totalRatingsString: restaurant.totalRatingsString || '1.2K+ ratings',
          sla: {
            restaurantId: restaurant.id,
            deliveryTime: (restaurant.sla && restaurant.sla.deliveryTime) || 30,
            minDeliveryTime: (restaurant.sla && restaurant.sla.minDeliveryTime) || 25,
            maxDeliveryTime: (restaurant.sla && restaurant.sla.maxDeliveryTime) || 35,
            lastMileTravel: (restaurant.sla && restaurant.sla.lastMileTravel) || 3.5,
            serviceability: 'SERVICEABLE',
            stressFactor: 1,
            rainMode: 'RAIN_MODE_NONE',
            longDistance: 'LONG_DISTANCE_NOT_LONG_DISTANCE',
            zoneId: 68,
            slaString: (restaurant.sla && restaurant.sla.slaString) || '25-35 MINS',
            lastMileTravelString: (restaurant.sla && restaurant.sla.lastMileTravelString) || '3.5 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2026-08-02 03:00:00',
            opened: true,
            visibility: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            header: discountHeader,
            shortDescriptionList: [
              {
                meta: `${discountHeader} | Use WELCOME`,
                discountType: 'Percentage',
                operationType: 'RESTAURANT',
              },
              {
                meta: 'FREE DELIVERY',
                discountType: 'FREE_DELIVERY',
                operationType: 'RESTAURANT',
              },
            ],
            descriptionList: [
              {
                meta: `${discountHeader} | Use WELCOME Above ₹199`,
                discountType: 'Percentage',
                operationType: 'RESTAURANT',
              },
              {
                meta: 'FREE DELIVERY',
                discountType: 'FREE_DELIVERY',
                operationType: 'RESTAURANT',
              },
            ],
            visible: true,
          },
          badges: restaurant.badges || {},
          slugString: `${slug}-${city.toLowerCase()}`,
          labels: [
            { title: 'Timings', message: 'null' },
            { title: 'Address', message: address },
            { title: 'Cuisines', message: cuisines.join(',') },
          ],
          totalRatings: 1200,
          aggregatedDiscountInfoV2: {
            header: discountHeader,
            shortDescriptionList: [
              {
                meta: `${discountHeader} | Use WELCOME`,
                discountType: 'Percentage',
                operationType: 'RESTAURANT',
              },
              {
                meta: 'FREE DELIVERY',
                discountType: 'FREE_DELIVERY',
                operationType: 'RESTAURANT',
              },
            ],
            descriptionList: [
              {
                meta: `${discountHeader} | Use WELCOME Above ₹199`,
                discountType: 'Percentage',
                operationType: 'RESTAURANT',
              },
              {
                meta: 'FREE DELIVERY',
                discountType: 'FREE_DELIVERY',
                operationType: 'RESTAURANT',
              },
            ],
            couponDetailsCta: 'View coupon details',
          },
          type: 'F',
          similarRestaurantAvailable: 'false',
          headerBanner: {
            url: `swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/${restaurant.id}`,
          },
          tradeCampaignHeadersV2: [{ discountType: 'Percentage' }, { discountType: 'FREE_DELIVERY' }],
          availabilityServiceabilityMessage: 'Temporarily closed for delivery',
          orderabilityCommunication: {
            title: { text: 'Currently' },
            subTitle: { text: 'CLOSED' },
            message: {
              text: 'Uh-oh! Outlet is not accepting orders at the moment. They should be back by 11:00 AM',
              textColour: 'primary',
            },
            customIcon: { bgGradientColorStart: '#EB8322', bgGradientColorEnd: '#EE5803' },
            commsStyling: {},
          },
          hasBestsellerItems: true,
          cartOrderabilityNudgeBanner: { parameters: {}, presentation: {} },
          latLong: '12.9715987,77.5945627',
          backgroundImageOverlayInfo: {},
          featuredSectionInfo: {},
          timingsInfo: {
            status: 'Closed',
            message: 'Opens 11:00 am',
            outletTiming: {
              infoList: [
                { title: 'Monday', subtitle: '11.00AM - 11.00PM', titleColor: 'text_high_emphasis', subtitleColor: 'text_high_emphasis' },
                { title: 'Tuesday', subtitle: '11.00AM - 11.00PM', titleColor: 'text_high_emphasis', subtitleColor: 'text_high_emphasis' },
                { title: 'Wednesday', subtitle: '11.00AM - 11.00PM', titleColor: 'text_high_emphasis', subtitleColor: 'text_high_emphasis' },
                { title: 'Thursday', subtitle: '11.00AM - 11.00PM', titleColor: 'text_high_emphasis', subtitleColor: 'text_high_emphasis' },
                { title: 'Friday', subtitle: '11.00AM - 11.00PM', titleColor: 'text_high_emphasis', subtitleColor: 'text_high_emphasis' },
                { title: 'Saturday', subtitle: '11.00AM - 11.00PM', titleColor: 'primary', subtitleColor: 'primary' },
                { title: 'Sunday', subtitle: '11.00AM - 11.00PM', titleColor: 'text_high_emphasis', subtitleColor: 'text_high_emphasis' },
              ],
              title: 'Outlet timings',
            },
            styleInfo: { titleColor: 'negative', subtitleColor: 'text_color_low_emphasis' },
          },
          phone: '9109124323',
          postalCode: '560001',
          state: 'Karnataka',
        },
        analytics: {},
      },
      relevance: {
        type: 'RELEVANCE_TYPE_CHECK_ORDERABILITY_AND_SHOW_MENU_OFFER_NUDGE',
        sectionId: 'MENU_ITEM_CART_UPDATE_POP_CROUTON',
      },
    },
  };
}

const OFFERS = [
  { header: '50% OFF UPTO ₹130', coupon: 'USE WELCOME', desc: 'ABOVE ₹179' },
  { header: 'ITEMS AT ₹149', coupon: 'USE DEALZONE', desc: 'ON SELECT ITEMS |' },
  { header: 'FLAT ₹100 OFF', coupon: 'USE FLAVORFUL', desc: 'ABOVE ₹249' },
  { header: 'FREE DELIVERY', coupon: 'USE PARTY', desc: 'NO MINIMUM ORDER' },
  { header: 'FLAT 15% OFF', coupon: 'USE GRANDFEAST', desc: 'ABOVE ₹599' },
];

function buildOffersCard(restaurantId) {
  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget',
        layout: {
          rows: 1,
          columns: 5,
          horizontalScrollEnabled: true,
          itemSpacing: 12,
          lineSpacing: 10,
          widgetPadding: {},
          containerStyle: { containerPadding: { left: 10, right: 10, bottom: 16 } },
        },
        id: 'offerCollectionWidget_UX4',
        gridElements: {
          infoWithStyle: {
            '@type': 'type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle',
            offers: OFFERS.map((offer, i) => ({
              info: {
                header: offer.header,
                offerTag: i % 2 === 0 ? 'DEFAULT' : 'FLAT DEAL',
                offerTagColor: '#E46D47',
                offerIds: [`${restaurantId}-offer-${i}`],
                expiryTime: '1970-01-01T00:00:00Z',
                couponCode: offer.coupon,
                description: offer.desc,
                offerType: 'offers',
                restId: restaurantId,
                offerLogo: i % 3 === 0 ? 'offers/generic' : 'offers/deal-of-day',
                descriptionTextColor: '#7302060C',
                primaryDescription: offer.coupon,
              },
              cta: { type: 'OFFER_HALF_CARD' },
            })),
            habitMilestoneInfo: { callout: {} },
            loyaltyDiscoverPresentationInfo: { logoCtx: {} },
          },
        },
      },
    },
  };
}

let dishCounter = 900000000;

function buildDish(item, categoryTitle) {
  dishCounter += 1;
  const vegClassifier = item.veg === true ? 'VEG' : 'NONVEG';
  const filters = item.veg === true ? ['VEG'] : ['NONVEG'];
  if (item.bestseller) filters.push('bestseller');
  filters.push('toprated');

  const addons = item.addons
    ? [
        {
          groupId: `${dishCounter}-g1`,
          groupName: 'Choose your add-ons',
          choices: item.addons.map((a, i) => ({
            id: `${dishCounter}-a${i}`,
            name: a,
            price: 4900 + i * 500,
            isVeg: vegClassifier === 'VEG' ? 1 : 0,
            inStock: 1,
            isExcluded: false,
            isFree: false,
            type: 'ITEM',
          })),
          maxAddons: 2,
          maxFreeAddons: 0,
          minAddons: 0,
          required: false,
        },
      ]
    : undefined;

  const ribbon = item.bestseller
    ? { text: 'Bestseller', textColor: '#E46D47', topBackgroundColor: '#FCE9E1', bottomBackgroundColor: '#FFD4C7' }
    : {};

  return {
    card: {
      '@type': 'type.googleapis.com/swiggy.presentation.food.v2.Dish',
      info: {
        id: String(dishCounter),
        name: item.name,
        category: categoryTitle,
        description: item.desc,
        imageId: resolveImage(item.img),
        inStock: 1,
        price: item.price,
        variants: {},
        variantsV2: {},
        addons,
        itemAttribute: {
          vegClassifier,
          portionSize: 'Serves 1',
        },
        ribbon,
        type: 'ITEM',
        itemBadge: {},
        badgesV2: {},
        ratings: {
          aggregatedRating: item.rating
            ? { rating: String(item.rating), ratingCount: item.ratingCount, ratingValue: String(item.rating) }
            : {},
        },
        itemPriceStrikeOff: true,
        parentId: String(dishCounter - 700000),
        menuFilterIds: filters,
        priceComparisonComms: {},
        instrumentationMetaMap: {
          swiggy_listing_price: String(item.price),
          swiggy_final_price: '0',
        },
      },
      analytics: {},
      hideRestaurantDetails: true,
    },
  };
}

function buildItemCategory(category) {
  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
        title: category.title,
        itemCards: category.items.map((item) => buildDish(item, category.title)),
      },
    },
  };
}

function buildVegFilterCard() {
  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge',
        badges: {},
        vegOnlyDetails: {
          imageId: 'AutoVegOnly_qkjowj',
          title: 'Showing only vegetarian options.',
          description: 'Tap on the VEG ONLY button to turn off the setting',
        },
        topRatedFilter: { attributes: { displayText: 'Ratings 4.0+' } },
        kidsCategoryFilter: {
          attributes: {
            displayText: 'Kids Favourites',
            tooltip: { enabled: true, displayText: 'Kids Favourites Filter applied. Remove this filter to see the full Menu.' },
          },
        },
        vegFilter: { attributes: { displayText: 'VEG' } },
        nonvegFilter: { attributes: { displayText: 'NONVEG' } },
      },
      relevance: { type: 'RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED', sectionId: 'MENU_FILTER_TOGGLE' },
    },
  };
}

function buildFaqCard(name, areaName) {
  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.FAQSection',
        title: `FAQs about ${name}`,
        qnas: [
          {
            question: `Does ${name} deliver food in ${areaName} on Swiggy?`,
            answer: `Yes, ${name} delivers food in ${areaName} through Swiggy. Customers can order their favorite dishes online and enjoy doorstep delivery.`,
          },
          { question: `What is ${name} known for?`, answer: `${name} is known for its popular dishes and authentic flavours.` },
          { question: `Does ${name} offer vegetarian options?`, answer: 'Yes, the restaurant offers both options, including a wide range of vegetarian items.' },
          {
            question: `How can I order from ${name} online?`,
            answer: `Customers can open the Swiggy app or website, search for ${name} in ${areaName}, browse the menu, add dishes to the cart, and place the order online.`,
          },
        ],
      },
    },
  };
}

function buildLicenseCard() {
  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo',
        type: 'FSSAI',
        imageId: 'fssai_final_edss9i',
        text: ['License No. 22122020001237'],
      },
    },
  };
}

function buildAddressCard(name, areaName) {
  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress',
        name,
        area: areaName,
        completeAddress: `Main Road, ${areaName}, Bangalore, Karnataka - 560001`,
      },
    },
  };
}

function buildPopularSearches(areaName, cuisines) {
  const labels = [
    ...cuisines.slice(0, 4).map((c) => ({ label: c, url: `https://www.swiggy.com/city/bangalore/${slugify(c)}-dish-restaurants` })),
    { label: 'Pizza', url: 'https://www.swiggy.com/city/bangalore/pizza-dish-restaurants' },
    { label: 'Biryani', url: 'https://www.swiggy.com/city/bangalore/biryani-dish-restaurants' },
    { label: 'Burger', url: 'https://www.swiggy.com/city/bangalore/burger-dish-restaurants' },
    { label: 'Dosa', url: 'https://www.swiggy.com/city/bangalore/dosa-dish-restaurants' },
    { label: 'Noodles', url: 'https://www.swiggy.com/city/bangalore/noodles-dish-restaurants' },
    { label: 'Cake', url: 'https://www.swiggy.com/city/bangalore/cake-dish-restaurants' },
    { label: 'Coffee', url: 'https://www.swiggy.com/city/bangalore/coffee-dish-restaurants' },
    { label: 'Sandwich', url: 'https://www.swiggy.com/city/bangalore/sandwich-dish-restaurants' },
    { label: 'Pasta', url: 'https://www.swiggy.com/city/bangalore/pasta-dish-restaurants' },
    { label: 'Shake', url: 'https://www.swiggy.com/city/bangalore/shake-dish-restaurants' },
    { label: 'Ice Cream', url: 'https://www.swiggy.com/city/bangalore/ice-cream-dish-restaurants' },
  ];
  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.PopularSearches',
        title: 'Popular Searches',
        interlinkingSeoInfo: [{ title: `Popular Restaurant In ${areaName}`, links: labels }],
      },
    },
  };
}

function buildSeoFooterCard() {
  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.SeoFooter',
        socialLinks: [
          { label: 'Linkedin', url: 'https://www.linkedin.com/company/swiggy-in/' },
          { label: 'Instagram', url: 'https://www.instagram.com/swiggyindia/?hl=en' },
          { label: 'Facebook', url: 'https://www.facebook.com/swiggy.in/' },
          { label: 'Pinterest', url: 'https://in.pinterest.com/swiggyindia/' },
          { label: 'Twitter', url: 'https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' },
        ],
      },
    },
  };
}

function buildAppInstallCard() {
  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.AppInstallLinks',
        title: 'For better experience,download the Swiggy app now',
        androidAppImage: 'portal/m/play_store.png',
        androidAppLink: 'https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader',
        iosAppImage: 'portal/m/app_store.png',
        iosAppLink: 'https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage',
      },
    },
  };
}

function buildPageMetaCard(name, areaName, cuisines) {
  return {
    card: {
      card: {
        '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.PageMetaInfo',
        title: `Order from ${name} online in ${areaName} | Swiggy`,
        description: `Order Online from ${name} in ${areaName}, Bangalore for delicious ${cuisines.join(' ').toLowerCase()} food. Enjoy fast delivery with Swiggy.`,
        keywords: `${name}, ${areaName}, Bangalore, ${cuisines.join(', ')}, food delivery, order food online`,
      },
    },
  };
}

function buildMenuForRestaurant(restaurant) {
  const menuKeys = RESTAURANT_MENUS[restaurant.id] || ['North Indian'];
  const categories = [];
  const seen = new Set();
  for (const key of menuKeys) {
    const catalog = CATALOGS[key];
    if (!catalog || seen.has(key)) continue;
    seen.add(key);
    for (const cat of catalog.categories) {
      categories.push(buildItemCategory(cat));
    }
  }

  const areaName = restaurant.areaName || 'Bangalore';
  const cuisines = restaurant.cuisines || [];

  return {
    statusCode: 0,
    data: {
      statusMessage: 'done successfully',
      cards: [
        {
          card: {
            card: {
              '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2',
              text: restaurant.name,
              headerStyling: { textColor: 'text_Highest_Emphasis', textVariant: 'header_H3_Black' },
            },
          },
        },
        {
          card: {
            card: {
              '@type': 'type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab',
              tabs: [{ id: 'Order Online', title: 'Order Online' }],
            },
          },
        },
        buildRestaurantCard(restaurant),
        buildOffersCard(restaurant.id),
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  buildVegFilterCard(),
                  ...categories,
                  buildFaqCard(restaurant.name, areaName),
                  buildLicenseCard(),
                  buildAddressCard(restaurant.name, areaName),
                  buildPopularSearches(areaName, cuisines),
                  buildSeoFooterCard(),
                  buildAppInstallCard(),
                  buildPageMetaCard(restaurant.name, areaName, cuisines),
                ],
              },
            },
          },
        },
      ],
      firstOffsetRequest: true,
      isQCLink: false,
    },
  };
}

function main() {
  const listJson = JSON.parse(fs.readFileSync(RESTAURANTS_FILE, 'utf8'));
  const restaurants = extractRestaurants(listJson);

  if (!fs.existsSync(DETAILS_DIR)) fs.mkdirSync(DETAILS_DIR, { recursive: true });

  let generated = 0;
  for (const restaurant of restaurants) {
    const menu = buildMenuForRestaurant(restaurant);
    const filePath = path.join(DETAILS_DIR, `${restaurant.id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(menu, null, 4) + '\n');
    generated += 1;
    console.log(`Generated: ${restaurant.id} - ${restaurant.name}`);
  }
  console.log(`\nDone. Generated ${generated} restaurant menus.`);
}

if (require.main === module) {
  main();
}

module.exports = { buildMenuForRestaurant };
