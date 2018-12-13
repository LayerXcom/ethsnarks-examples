#include "sha256_preimage.hpp"
#include "export.cpp"
#include "import.hpp"
#include "stubs.hpp"
#include "utils.hpp"

namespace ethsnarks {

class sha256_preimage : public GadgetT
{
    public:
    



}
} //namespace ethsnarks

char *sha256_preimage_prove(const char *pk_file, const uint8_t *preimage_bytes64)
{

}

int sha256_preimage_genkeys(const char *pk_file, const char *vk_file)
{

}

bool sha256_preimage_verify(const char *vk_json, const char *proof_json)
{
    
}