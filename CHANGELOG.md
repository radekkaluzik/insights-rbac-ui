# 1.0.0 (2024-11-13)


### Bug Fixes

* **basename:** basename for workspaces is calculated incorrectly ([#1699](https://github.com/radekkaluzik/insights-rbac-ui/issues/1699)) ([113a38e](https://github.com/radekkaluzik/insights-rbac-ui/commit/113a38e4d3475e79252a0e931c203056d6e77359))
* **deploy:** correct quay repository in frontend config ([#1693](https://github.com/radekkaluzik/insights-rbac-ui/issues/1693)) ([1f433e9](https://github.com/radekkaluzik/insights-rbac-ui/commit/1f433e927df2f3febc5301cedb775bdbea21caa8))
* **deploy:** correct quay repository in frontend config ([#1693](https://github.com/radekkaluzik/insights-rbac-ui/issues/1693)) ([800fbb7](https://github.com/radekkaluzik/insights-rbac-ui/commit/800fbb7bf3efec362ac3f08e7a690b3982f2b4c3))
* issues with merge commit ([84917d3](https://github.com/radekkaluzik/insights-rbac-ui/commit/84917d3caab81a7970f80f148d3f9252582eb746))
* **konflux:** add rpms check to pull requests ([#1691](https://github.com/radekkaluzik/insights-rbac-ui/issues/1691)) ([81d51ff](https://github.com/radekkaluzik/insights-rbac-ui/commit/81d51fffbabaf08a4fa3a7461d0bba31407d892d))
* **konflux:** add rpms check to pull requests ([#1691](https://github.com/radekkaluzik/insights-rbac-ui/issues/1691)) ([981c7ce](https://github.com/radekkaluzik/insights-rbac-ui/commit/981c7ceae4bc46143f703f666484e2cea4338469))
* memoize users row data ([60deb9b](https://github.com/radekkaluzik/insights-rbac-ui/commit/60deb9b76285d3b6899ebe59d8d849f92ae9a384))
* **permission:** unable to load more than 2 pages in permissions ([#1688](https://github.com/radekkaluzik/insights-rbac-ui/issues/1688)) ([f150391](https://github.com/radekkaluzik/insights-rbac-ui/commit/f150391edead6b54b4c8255706024a1f09126f49))
* **permission:** unable to load more than 2 pages in permissions ([#1688](https://github.com/radekkaluzik/insights-rbac-ui/issues/1688)) ([2d08c25](https://github.com/radekkaluzik/insights-rbac-ui/commit/2d08c25204ab35488a01c1c05cb51c942f244510))
* remove mapStateToProps and mapDispatchToProps ([d9179d6](https://github.com/radekkaluzik/insights-rbac-ui/commit/d9179d636346c3cbb00401820254ed00ff88de41))
* remove withRouter decorators ([5b17ed2](https://github.com/radekkaluzik/insights-rbac-ui/commit/5b17ed29b8a56abd124257d11d62b033c930e45c))
* replace useRouteMatch with useParams ([d23a2a2](https://github.com/radekkaluzik/insights-rbac-ui/commit/d23a2a25469e821d41ac14bb70b396f43402db53))
* upgrade utility classes to PF5 ([750a18a](https://github.com/radekkaluzik/insights-rbac-ui/commit/750a18a60cdeacbee029b70ff1e7920f7b83e8f3))


### Features

* add detailed view to Workspaces ([#1682](https://github.com/radekkaluzik/insights-rbac-ui/issues/1682)) ([2f1efc1](https://github.com/radekkaluzik/insights-rbac-ui/commit/2f1efc1fdff0cdd77972b479d3d5a12ad300c204))
* **common-auth-model:** add mocked requests ([#1695](https://github.com/radekkaluzik/insights-rbac-ui/issues/1695)) ([966361c](https://github.com/radekkaluzik/insights-rbac-ui/commit/966361cb70c7bf4784d549a05d46eb43f82dfe59))
* create add to user group modal ([0112379](https://github.com/radekkaluzik/insights-rbac-ui/commit/011237902147bd8f7c6e702bb58524016d353269))
* create user details view ([53ccf7a](https://github.com/radekkaluzik/insights-rbac-ui/commit/53ccf7a6970e48ff7881a910c69370950a433899))
* **konflux:** enablet unit tests on Konflux ([#1656](https://github.com/radekkaluzik/insights-rbac-ui/issues/1656)) ([527b4d8](https://github.com/radekkaluzik/insights-rbac-ui/commit/527b4d89273077820459004049fbd16b79e42d2b))
* **rbac:** add access-requests ([#754](https://github.com/radekkaluzik/insights-rbac-ui/issues/754)) ([7fa22b0](https://github.com/radekkaluzik/insights-rbac-ui/commit/7fa22b0bd7ee61f09e266e09ac2691b1f011fd2f))
* show WS enable alert only if user can perform this action ([#1681](https://github.com/radekkaluzik/insights-rbac-ui/issues/1681)) ([b89b2d3](https://github.com/radekkaluzik/insights-rbac-ui/commit/b89b2d3467f34996a36e5bd1052688fa4f021648))
* **userstable:** add delete user modal ([814f7f1](https://github.com/radekkaluzik/insights-rbac-ui/commit/814f7f161c513f7fe3bfd95c4909f30e10c18f30))
* **workspaces:** enable overview if feature flag enabled ([#1683](https://github.com/radekkaluzik/insights-rbac-ui/issues/1683)) ([59fa607](https://github.com/radekkaluzik/insights-rbac-ui/commit/59fa60744a0fe99304f4cda2795c0a2120036c49))


### Reverts

* Revert "Do not send username when creating service account ([#1559](https://github.com/radekkaluzik/insights-rbac-ui/issues/1559))" ([#1560](https://github.com/radekkaluzik/insights-rbac-ui/issues/1560)) ([a310c88](https://github.com/radekkaluzik/insights-rbac-ui/commit/a310c885ab44d063e378393b75f161aa04670704))
* Revert "Revert "Do not send username when creating service account ([#1559](https://github.com/radekkaluzik/insights-rbac-ui/issues/1559))" ([#1560](https://github.com/radekkaluzik/insights-rbac-ui/issues/1560))" ([#1561](https://github.com/radekkaluzik/insights-rbac-ui/issues/1561)) ([38dc92f](https://github.com/radekkaluzik/insights-rbac-ui/commit/38dc92fea5c5cd4db8a3dd1cbfe90cce572656a1))

# [1.8.0](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.7.1...v1.8.0) (2024-11-13)


### Features

* add detailed view to Workspaces ([#1682](https://github.com/RedHatInsights/insights-rbac-ui/issues/1682)) ([2f1efc1](https://github.com/RedHatInsights/insights-rbac-ui/commit/2f1efc1fdff0cdd77972b479d3d5a12ad300c204))

## [1.7.1](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.7.0...v1.7.1) (2024-11-12)


### Bug Fixes

* **basename:** basename for workspaces is calculated incorrectly ([#1699](https://github.com/RedHatInsights/insights-rbac-ui/issues/1699)) ([113a38e](https://github.com/RedHatInsights/insights-rbac-ui/commit/113a38e4d3475e79252a0e931c203056d6e77359))

# [1.7.0](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.6.0...v1.7.0) (2024-11-06)


### Features

* **common-auth-model:** add mocked requests ([#1695](https://github.com/RedHatInsights/insights-rbac-ui/issues/1695)) ([966361c](https://github.com/RedHatInsights/insights-rbac-ui/commit/966361cb70c7bf4784d549a05d46eb43f82dfe59))

# [1.6.0](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.5.3...v1.6.0) (2024-11-05)


### Bug Fixes

* **deploy:** correct quay repository in frontend config ([#1693](https://github.com/RedHatInsights/insights-rbac-ui/issues/1693)) ([1f433e9](https://github.com/RedHatInsights/insights-rbac-ui/commit/1f433e927df2f3febc5301cedb775bdbea21caa8))
* **konflux:** add rpms check to pull requests ([#1691](https://github.com/RedHatInsights/insights-rbac-ui/issues/1691)) ([81d51ff](https://github.com/RedHatInsights/insights-rbac-ui/commit/81d51fffbabaf08a4fa3a7461d0bba31407d892d))
* **permission:** unable to load more than 2 pages in permissions ([#1688](https://github.com/RedHatInsights/insights-rbac-ui/issues/1688)) ([f150391](https://github.com/RedHatInsights/insights-rbac-ui/commit/f150391edead6b54b4c8255706024a1f09126f49))


### Features

* create user details view ([53ccf7a](https://github.com/RedHatInsights/insights-rbac-ui/commit/53ccf7a6970e48ff7881a910c69370950a433899))

## [1.5.3](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.5.2...v1.5.3) (2024-11-03)


### Bug Fixes

* **deploy:** correct quay repository in frontend config ([#1693](https://github.com/RedHatInsights/insights-rbac-ui/issues/1693)) ([800fbb7](https://github.com/RedHatInsights/insights-rbac-ui/commit/800fbb7bf3efec362ac3f08e7a690b3982f2b4c3))

## [1.5.2](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.5.1...v1.5.2) (2024-11-01)


### Bug Fixes

* **konflux:** add rpms check to pull requests ([#1691](https://github.com/RedHatInsights/insights-rbac-ui/issues/1691)) ([981c7ce](https://github.com/RedHatInsights/insights-rbac-ui/commit/981c7ceae4bc46143f703f666484e2cea4338469))

## [1.5.1](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.5.0...v1.5.1) (2024-10-29)


### Bug Fixes

* **permission:** unable to load more than 2 pages in permissions ([#1688](https://github.com/RedHatInsights/insights-rbac-ui/issues/1688)) ([2d08c25](https://github.com/RedHatInsights/insights-rbac-ui/commit/2d08c25204ab35488a01c1c05cb51c942f244510))

# [1.5.0](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.4.0...v1.5.0) (2024-10-25)


### Bug Fixes

* issues with merge commit ([84917d3](https://github.com/RedHatInsights/insights-rbac-ui/commit/84917d3caab81a7970f80f148d3f9252582eb746))


### Features

* create add to user group modal ([0112379](https://github.com/RedHatInsights/insights-rbac-ui/commit/011237902147bd8f7c6e702bb58524016d353269))

# [1.4.0](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.3.0...v1.4.0) (2024-10-24)


### Features

* **workspaces:** enable overview if feature flag enabled ([#1683](https://github.com/RedHatInsights/insights-rbac-ui/issues/1683)) ([59fa607](https://github.com/RedHatInsights/insights-rbac-ui/commit/59fa60744a0fe99304f4cda2795c0a2120036c49))

# [1.3.0](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.2.0...v1.3.0) (2024-10-24)


### Bug Fixes

* memoize users row data ([60deb9b](https://github.com/RedHatInsights/insights-rbac-ui/commit/60deb9b76285d3b6899ebe59d8d849f92ae9a384))


### Features

* **userstable:** add delete user modal ([814f7f1](https://github.com/RedHatInsights/insights-rbac-ui/commit/814f7f161c513f7fe3bfd95c4909f30e10c18f30))

# [1.2.0](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.1.0...v1.2.0) (2024-10-23)


### Features

* **konflux:** enablet unit tests on Konflux ([#1656](https://github.com/RedHatInsights/insights-rbac-ui/issues/1656)) ([527b4d8](https://github.com/RedHatInsights/insights-rbac-ui/commit/527b4d89273077820459004049fbd16b79e42d2b))

# [1.1.0](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.0.1...v1.1.0) (2024-10-22)


### Features

* show WS enable alert only if user can perform this action ([#1681](https://github.com/RedHatInsights/insights-rbac-ui/issues/1681)) ([b89b2d3](https://github.com/RedHatInsights/insights-rbac-ui/commit/b89b2d3467f34996a36e5bd1052688fa4f021648))

## [1.0.1](https://github.com/RedHatInsights/insights-rbac-ui/compare/v1.0.0...v1.0.1) (2024-10-22)


### Bug Fixes

* upgrade utility classes to PF5 ([750a18a](https://github.com/RedHatInsights/insights-rbac-ui/commit/750a18a60cdeacbee029b70ff1e7920f7b83e8f3))

# 1.0.0 (2024-10-18)


### Bug Fixes

* remove mapStateToProps and mapDispatchToProps ([d9179d6](https://github.com/epwinchell/insights-rbac-ui/commit/d9179d636346c3cbb00401820254ed00ff88de41))
* remove withRouter decorators ([5b17ed2](https://github.com/epwinchell/insights-rbac-ui/commit/5b17ed29b8a56abd124257d11d62b033c930e45c))
* replace useRouteMatch with useParams ([d23a2a2](https://github.com/epwinchell/insights-rbac-ui/commit/d23a2a25469e821d41ac14bb70b396f43402db53))


### Features

* **rbac:** add access-requests ([#754](https://github.com/epwinchell/insights-rbac-ui/issues/754)) ([7fa22b0](https://github.com/epwinchell/insights-rbac-ui/commit/7fa22b0bd7ee61f09e266e09ac2691b1f011fd2f))


### Reverts

* Revert "Do not send username when creating service account ([#1559](https://github.com/epwinchell/insights-rbac-ui/issues/1559))" ([#1560](https://github.com/epwinchell/insights-rbac-ui/issues/1560)) ([a310c88](https://github.com/epwinchell/insights-rbac-ui/commit/a310c885ab44d063e378393b75f161aa04670704))
* Revert "Revert "Do not send username when creating service account ([#1559](https://github.com/epwinchell/insights-rbac-ui/issues/1559))" ([#1560](https://github.com/epwinchell/insights-rbac-ui/issues/1560))" ([#1561](https://github.com/epwinchell/insights-rbac-ui/issues/1561)) ([38dc92f](https://github.com/epwinchell/insights-rbac-ui/commit/38dc92fea5c5cd4db8a3dd1cbfe90cce572656a1))

# 1.0.0 (2024-10-17)


### Bug Fixes

* remove mapStateToProps and mapDispatchToProps ([d9179d6](https://github.com/RedHatInsights/insights-rbac-ui/commit/d9179d636346c3cbb00401820254ed00ff88de41))
* remove withRouter decorators ([5b17ed2](https://github.com/RedHatInsights/insights-rbac-ui/commit/5b17ed29b8a56abd124257d11d62b033c930e45c))
* replace useRouteMatch with useParams ([d23a2a2](https://github.com/RedHatInsights/insights-rbac-ui/commit/d23a2a25469e821d41ac14bb70b396f43402db53))


### Features

* **rbac:** add access-requests ([#754](https://github.com/RedHatInsights/insights-rbac-ui/issues/754)) ([7fa22b0](https://github.com/RedHatInsights/insights-rbac-ui/commit/7fa22b0bd7ee61f09e266e09ac2691b1f011fd2f))


### Reverts

* Revert "Do not send username when creating service account ([#1559](https://github.com/RedHatInsights/insights-rbac-ui/issues/1559))" ([#1560](https://github.com/RedHatInsights/insights-rbac-ui/issues/1560)) ([a310c88](https://github.com/RedHatInsights/insights-rbac-ui/commit/a310c885ab44d063e378393b75f161aa04670704))
* Revert "Revert "Do not send username when creating service account ([#1559](https://github.com/RedHatInsights/insights-rbac-ui/issues/1559))" ([#1560](https://github.com/RedHatInsights/insights-rbac-ui/issues/1560))" ([#1561](https://github.com/RedHatInsights/insights-rbac-ui/issues/1561)) ([38dc92f](https://github.com/RedHatInsights/insights-rbac-ui/commit/38dc92fea5c5cd4db8a3dd1cbfe90cce572656a1))
