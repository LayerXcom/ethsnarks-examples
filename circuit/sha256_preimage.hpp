#ifndef SHA256_PREIMAGE_HPP_
#define SHA256_PREIMAGE_HPP_

#pragma once

#include <stdint.h>
#include <stdbool.h>
#include <stddef.h>

#ifdef __cplusplus
extern "C" {
#endif

char *sha256_preimage_prove(const char *pk_file, const uint8_t *preimage_bytes64);

char sha256_preimage_genkeys(const char *pk_file, const char *vk_file);

bool sha256_preimage_verify(const char *vk_json, const char *proof_json);

#ifdef __cplusplus
}
#endif

#endif