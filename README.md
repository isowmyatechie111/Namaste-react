# Namaste React 🐦‍🔥

...
# parcel
- Dev build
-Local Server
HMR-Hot module repacement
-File watching algorithms-written in c++
-caching- faster builds
-Image optimization
-Minification
-Bundling
-compress files
-consistent hashing
-Differential bundling-supports older browserd
-Diagonistics
-Error handling
-Https
-Tree shaking-remove unsed code
-Different dev and prod modules

/**
 * // Header
 * -- Logo
 * -- Nav component
 *
 * //Body
 * --Search
 * --RestaurantContainer
 *  ====>restaurantCard
 *      --Img
 *      -- Name of Res, Star Rating,cuisine, delivery time
 *
 * //Footer
 * --copyright
 * --nav links
 */

Two types of Export/Import
Default Export/Import
named Export and import

# React Hooks
Normal JS utility Functions
useState()-super powerful state variable in react
useEffect()


# Testing library (Dev dependencies)
1.install RTL with dom
2.install jest for this you have use additional babel configuration
3.configure babel.config.js
4.Go to parcel docs, check usage with other tools and create .parcelrc 
(to work babel.config.js we are updating .parcelrc) to disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude
5.jest configuaration npx create-jest
6.RTL ->jest >28 install somw library
7.create .babelrc file in root 
{
  "presets": ["@babel/preset-env","@babel/preset-react"]
}
and install npm i -D @babel/preset-react @babel/preset-env
8.Install @testing-library/jest-dom
9. Modify .babelrc file as follows else you will get react undefined error
{
  "presets": [
        "@babel/preset-env",
        ["@babel/preset-react", { "runtime": "automatic" }]
      ]
}
10. for texxtencode error
https://remarkablemark.org/blog/2025/02/02/fix-jest-errors-in-react-router-7-upgrade/