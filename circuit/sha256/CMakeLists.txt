cmake_minimum_required(VERSION 3.8)
project(ethsnarks-exmaples)
add_subdirectory(../../ethsnarks ../../.build/ethsnarks EXCLUDE_FROM_ALL)

add_library(sha256_preimage SHARED sha256_preimage.cpp)
target_link_libraries(sha256_preimage ethsnarks_common)
set_property(TARGET sha256_preimage PROPERTY POSITION_INDEPENDENT_CODE ON)

add_executable(sha256_preimage_cli sha256_preimage_cli.cpp)
target_link_libraries(sha256_preimage_cli ethsnarks_common crypto)