cmake_minimum_required(VERSION 3.8)
project(ethsnarks-exmaples)
add_subdirectory(../../ethsnarks ../../.build/ethsnarks EXCLUDE_FROM_ALL)

add_library(longsightl_preimage SHARED longsightl_preimage.cpp)
target_link_libraries(longsightl_preimage ethsnarks_common)
set_property(TARGET longsightl_preimage PROPERTY POSITION_INDEPENDENT_CODE ON)

add_executable(longsightl_preimage_cli longsightl_preimage_cli.cpp)
target_link_libraries(longsightl_preimage_cli ethsnarks_common crypto)
