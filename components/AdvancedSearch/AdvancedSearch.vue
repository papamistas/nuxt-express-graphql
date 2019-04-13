<template>
  <div class="AdvancedSearch">
    <div class="col-xs-12 col-md-2 col-lg-2 searchBar ">
      <div class="panel panel-info sh">
        <div class="panel-heading">
          <h3 class="panel-title text-center lead"><strong>Filtros</strong></h3>
        </div>
        <div class="panel-body">
          <div class="form">
            <form
              class="form-search ff"
              id="search-mapa"
              action="/casas/index.php/casa/search"
              method="GET"
            >
              <div class="btn-group">
                <div class="form-group">
                  <input
                    class=""
                    name="sType"
                    id="Casa_for_rent"
                    value="for_rent"
                    type="radio"
                  />
                  <label for="Casa_for_rent">Férias</label>
                </div>
                <div class="form-group">
                  <input
                    class=""
                    name="sType"
                    value="for_arrenda"
                    id="Casa_for_arrenda"
                    type="radio"
                  />
                  <label for="Casa_for_arrenda">Arrendamento</label>
                </div>
                <div class="form-group">
                  <input
                    class=""
                    checked="checked"
                    name="sType"
                    value="for_sale"
                    id="Casa_for_sale"
                    type="radio"
                  />
                  <label for="Casa_for_sale">Venda</label>
                </div>
              </div>

              <div class="form-group">
                <label class="sr-only" for="Casa_tipoalojamento"
                  >Tipo alojamento</label
                ><select
                  class="Casa_tipoalojamento form-control"
                  id="Casa_tipoalojamento"
                  name="Casa[tipoalojamento]"
                  ><option value="">Todos Tipos</option
                  ><option value="Vivenda">Vivenda</option
                  ><option value="Apartamento">Apartamento</option> </select
                ><label class="sr-only" for="Casa_tipo">Tipo</label
                ><select
                  id="Casa_tipo"
                  class="Casa_tipo form-control"
                  name="Casa[tipo]"
                  ><option value="">Todas Tipologias</option
                  ><option value="V4">V4</option
                  ><option value="T3">T3</option
                  ><option value="T1">T1</option
                  ><option value="T2">T2</option> </select
                ><label class="sr-only" for="Casa_localidade">Localidade</label
                ><select
                  id="Casa_localidade"
                  class="Casa_localidade form-control"
                  name="Casa[localidade]"
                  ><option value="">Todas Localidades</option
                  ><option value="Altura">Altura</option
                  ><option value="Manta Rota">Manta Rota</option
                  ><option value="Cabanas">Cabanas</option>
                </select>
                <label class="sr-only" for="Casa_pessoas">Pessoas</label
                ><select
                  class="form-control"
                  name="Casa[pessoas]"
                  id="Casa_pessoas"
                  style="display: block;"
                >
                  <option value="">Todas Pessoas</option>
                  <option value="8">8</option>
                  <option value="7">7</option>
                  <option value="6">6</option>
                  <option value="5">5</option>
                  <option value="4">4</option>
                  <option value="3">3</option>
                  <option value="2">2</option>
                  <option value="0" selected="selected">0</option>
                </select>
              </div>

              <div class="rentAttr" style="display: block;">
                <div class="form-group">
                  <input
                    placeholder="De"
                    size="8"
                    class="form-control datepick hasDatepicker"
                    name="Casa[inicio]"
                    id="Casa_inicio"
                    type="text"
                  />
                  <input
                    placeholder="Até"
                    size="8"
                    class="form-control datepick datepickEnd hasDatepicker"
                    name="Casa[fim]"
                    id="Casa_fim"
                    type="text"
                  />
                  <label for="Casa_quartos">Quartos</label>
                  <input
                    size="5"
                    maxlength="1"
                    class="form-control"
                    name="Casa[quartos]"
                    id="Casa_quartos"
                    type="text"
                  />
                  <div
                    class="errorMessage"
                    id="Casa_quartos_em_"
                    style="display:none"
                  ></div>
                  <label for="Casa_camascasal">Camas casal</label>
                  <input
                    size="5"
                    maxlength="1"
                    class="form-control"
                    name="Casa[camascasal]"
                    id="Casa_camascasal"
                    type="text"
                  />
                  <div
                    class="errorMessage"
                    id="Casa_camascasal_em_"
                    style="display:none"
                  ></div>
                  <label for="Casa_camassingle">Camas single</label>
                  <input
                    size="5"
                    maxlength="1"
                    class="form-control"
                    name="Casa[camassingle]"
                    id="Casa_camassingle"
                    type="text"
                  />
                  <div
                    class="errorMessage"
                    id="Casa_camassingle_em_"
                    style="display:none"
                  ></div>
                </div>
                <div class="form-group">
                  <input
                    value="1"
                    class=""
                    name="Casa[certif]"
                    id="Casa_certif"
                    type="checkbox"
                  />
                  <label for="Casa_certif">Certificadas Apenas</label>
                </div>
                <div class="form-group">
                  <input
                    value="1"
                    class=""
                    name="Casa[piscina]"
                    id="Casa_piscina"
                    type="checkbox"
                  />
                  <label for="Casa_piscina">Piscina</label>
                </div>
                <div class="form-group">
                  <input
                    value="1"
                    class=""
                    name="Casa[ar_condicionado]"
                    id="Casa_ar_condicionado"
                    type="checkbox"
                  />
                  <label for="Casa_ar_condicionado">Ar Condicionado</label>
                </div>
                <div class="form-group">
                  <input
                    value="1"
                    class=""
                    name="Casa[satcabo]"
                    id="Casa_satcabo"
                    type="checkbox"
                  />
                  <label for="Casa_satcabo">Satélite/cabo</label>
                </div>
                <div class="form-group">
                  <input
                    value="1"
                    class=""
                    name="Casa[internet]"
                    id="Casa_internet"
                    type="checkbox"
                  />
                  <label for="Casa_internet">Internet</label>
                </div>
              </div>
              <div>
                <button type="submit" class="btn btn-default btn-lg btn-block">
                  <span class="glyphicon glyphicon-search icon-warning"></span>
                </button>
              </div>

              <div class="clearfix"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvancedSearch',
  props: {}
}
</script>
